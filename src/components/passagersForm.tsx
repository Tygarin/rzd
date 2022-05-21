import { Formik, Field, FormikHelpers } from 'formik';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import passengerFormConfig from '../configs/passengerFormConfig';

interface passagerData {
    surname: string,
    name: string,
    middleName: string,
    dateBirth: string,
    gender: string,
    citizenship: string,
    documentType: string,
    email?: string,
}

interface formProps {
    id: number,
    openModal: Function,
    passagersCount: number,
    removePassager: Function
}

export default function PassagersForm(props: formProps) {
    const fetchData = async (data: passagerData) => {
        await fetch('https://webhook.site/dd889ba7-32cd-4ffb-9ad6-44849e407e21', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            mode: 'no-cors',
            body: JSON.stringify(data)
        })
    }

    const generateValues = (type: string) => {
        const values = {} as any
        passengerFormConfig.map(e => {
            let value: any = ''
            if (type === 'validation') {
                value = Yup.string()
                if (e.type === 'email') value = value.email('Неправильный E-mail')
                if (e.type === 'text') value = value
                    .min(2, 'Слишком мало символов!')
                    .max(50, 'Слишком много символов!')
                if (e.req) value = value.required('Обязательное поле')
            }
            values[e.name] = value
        })
        return values
    }

    const validationSchema = Yup.object().shape(generateValues('validation'))

    return (
        <Formik
            initialValues={generateValues('initial')}
            validationSchema={validationSchema}
            onSubmit={(
                values: passagerData,
                { setSubmitting }
            ) => {
                fetchData(values)
                    .then(res => {
                        props.openModal()
                        setSubmitting(false);
                    })
                    .catch(err => console.log(err))
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='my-5 border p-5 pr-10 relative border-black border-solid'>
                            <div className='flex flex-wrap gap-5'>
                                {passengerFormConfig.map((passager, index) =>
                                    <div key={index}>
                                        <p>
                                            {passager.text}
                                            {passager.req && <span className='text-rose-600 ml-1'>*</span>}
                                        </p>
                                        {passager.type === 'select' ? (
                                            <Field className="input" name={passager.name} as="select">
                                                <option value="">Выберите</option>
                                                {passager.selectValues?.map((e, i) => <option key={i} value={e.value}>{e.text}</option>)}
                                            </Field>
                                        ) : (
                                            <input
                                                type={passager.type}
                                                name={passager.name}
                                                className='input'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                key={index}
                                                value={values[passager.name as keyof typeof values]}
                                            />
                                        )}
                                        <p className='text-rose-600 text-xs'>
                                            {errors[passager.name] && touched[passager.name] && errors[passager.name]?.toLocaleString()}
                                        </p>
                                    </div>
                                )}
                            </div>
                            {(props.passagersCount - 1) === props.id && <div className='absolute top-1/2 right-6 transform -translate-y-1/2'>
                                <Tooltip title="Delete" onClick={() => props.removePassager()}>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>}
                        </div>
                        <div>
                            <Button type="submit" disabled={isSubmitting} variant="outlined">Отправить данные о {props.id + 1} пассажире</Button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>

    )
}