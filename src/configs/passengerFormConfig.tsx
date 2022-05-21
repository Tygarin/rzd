const passengerFormConfig = [
    {
        type: 'text',
        name: 'surname',
        text: 'Фамилия',
        req: true
    },
    {
        type: 'text',
        name: 'name',
        text: 'Имя',
        req: true
    },
    {
        type: 'text',
        name: 'middleName',
        text: 'Отчество',
        req: true
    },
    {
        type: 'date',
        name: 'dateBirth',
        text: 'Дата рождения',
        req: true
    },
    {
        type: 'select',
        name: 'gender',
        text: 'Пол',
        selectValues: [
            {
                value: 'man',
                text: 'Мужской'
            },
            {
                value: 'woman',
                text: 'Женский'
            }
        ],
        req: true
    },
    {
        type: 'select',
        name: 'citizenship',
        text: 'Гражданство',
        selectValues: [
            {
                value: 'Russia',
                text: 'Россия'
            },
            {
                value: 'America',
                text: 'Америка'
            }
        ],
        req: true
    },
    {
        type: 'select',
        name: 'documentType',
        text: 'Тип документа',
        selectValues: [
            {
                value: 'Passport RU',
                text: 'Паспорт РФ'
            },
            {
                value: 'Passport America',
                text: 'Американский паспорт'
            }
        ],
        req: true
    },
    {
        type: 'email',
        name: 'email',
        text: 'E-mail пассажира',
        req: false
    },
]

export default passengerFormConfig