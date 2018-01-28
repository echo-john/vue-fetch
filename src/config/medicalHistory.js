export default {
  formName: 'Medical History',
  fields: [
    {
      name: 'vomiting',
      component: 'FormSelect',
      default: false,
      options: [
        {
          label: 'No',
          value: false
        },
        {
          label: 'Yes',
          value: true
        }
      ],
      subFields: [
        {
          name: 'duration',
          component: 'FormSelect',
          default: 'hours',
          condition () {
            return this.form.vomiting
          },
          options: [
            {
              label: 'Hours',
              value: 'hours'
            }, {
              label: 'Days',
              value: 'days'
            }, {
              label: 'Months',
              value: 'months'
            }
          ]
        },
        {
          name: 'frequency',
          component: 'FormText',
          placeholder: 'ie: twice an hour',
          condition () {
            return this.form.vomiting
          }
        },
        {
          name: 'content',
          component: 'FormText',
          placeholder: 'ie: house plants',
          condition () {
            return this.form.vomiting
          }
        },
        {
          name: 'notes',
          component: 'FormText',
          placeholder: 'enter notes',
          condition () {
            return this.form.vomiting
          }
        },
        {
          name: 'dayOfWeek',
          component: 'FormSelect',
          default: 'sun',
          condition () {
            return this.form.duration === 'days'
          },
          options: [
            {
              label: 'Sunday',
              value: 'sun'
            }, {
              label: 'Monday',
              value: 'mon'
            }
          ]
        }
      ]
    }
  ]
}
