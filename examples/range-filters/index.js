import React from 'react';
import ReactDOM from 'react-dom';
import MUIDataTable from '../../src/';

class Example extends React.Component {
  render() {
    const columns = [
      {
        name: 'Name',
        options: {
          filter: true,
          filterList: [],
          customFilterListRender: v => `Name: ${v}`,
          filterOptions: { names: ['a', 'b', 'c', 'Business Analyst'] },
        },
      },
      {
        name: 'Title',
        options: {
          filter: true,
          filterList: [],
          customFilterListRender: v => `Title: ${v}`,
          filterType: 'textField', // set filterType's at the column level
        },
      },
      {
        name: 'Location',
        options: {
          filter: false,
        },
      },
      {
        name: 'Hired',
        options: {
          filter: true,
          customFilterListRender: v => {
            const toDate = date => new Date(date).toLocaleString('en-US', dateTimeOptions).replace(',', '');

            let startDate = '';
            if (v['start']) {
              startDate = toDate(v['start']);
            }

            let endDate = '';
            if (v['end']) {
              endDate = toDate(v['end']);
            }
            const hiredString =
              startDate === ''
                ? `Before ${endDate}`
                : endDate === ''
                ? `After ${startDate}`
                : `From ${startDate} To ${endDate}`;
            return `Hired: ${hiredString}`;
          },
          filterType: 'dateRange',
        },
      },
      {
        name: 'Salary',
        options: {
          filter: true,
          customFilterListRender: v => `Salary: From ${v['start']} To ${v['end']}`,
          sort: false,
          filterType: 'numberRange',
        },
      },
    ];

    const dateTimeOptions = {
      timeZone: 'America/Chicago',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    };
    const data = [
      [
        'Gabby George',
        'Business Analyst',
        'Minneapolis',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        100000,
      ],
      [
        'Business Analyst',
        'Business Consultant',
        'Dallas',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        200000,
      ],
      [
        'Jaden Collins',
        'Attorney',
        'Santa Ana',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        500000,
      ],
      [
        'Franky Rees',
        'Business Analyst',
        'St. Petersburg',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        50000,
      ],
      [
        'Aaren Rose',
        'Business Consultant',
        'Toledo',
        new Date('2010-05-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        75000,
      ],
      [
        'Blake Duncan',
        'Business Management Analyst',
        'San Diego',
        new Date('2018-05-30').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        94000,
      ],
      [
        'Frankie Parry',
        'Agency Legal Counsel',
        'Jacksonville',
        new Date('2014-05-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        210000,
      ],
      [
        'Lane Wilson',
        'Commercial Specialist',
        'Omaha',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        65000,
      ],
      [
        'Robin Duncan',
        'Business Analyst',
        'Los Angeles',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        77000,
      ],
      [
        'Mel Brooks',
        'Business Consultant',
        'Oklahoma City',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        135000,
      ],
      [
        'Harper White',
        'Attorney',
        'Pittsburgh',
        new Date('2016-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        420000,
      ],
      [
        'Kris Humphrey',
        'Agency Legal Counsel',
        'Laredo',
        new Date('2017-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        150000,
      ],
      [
        'Frankie Long',
        'Industrial Analyst',
        'Austin',
        new Date('2010-07-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        170000,
      ],
      [
        'Brynn Robbins',
        'Business Analyst',
        'Norfolk',
        new Date('2010-02-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        90000,
      ],
      [
        'Justice Mann',
        'Business Consultant',
        'Chicago',
        new Date('2015-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        133000,
      ],
      [
        'Addison Navarro',
        'Business Management Analyst',
        'New York',
        new Date('2015-01-21').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        295000,
      ],
      [
        'Jesse Welch',
        'Agency Legal Counsel',
        'Seattle',
        new Date('2019-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        200000,
      ],
      [
        'Eli Mejia',
        'Commercial Specialist',
        'Long Beach',
        new Date('2012-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        400000,
      ],
      [
        'Gene Leblanc',
        'Industrial Analyst',
        'Hartford',
        new Date('2008-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        110000,
      ],
      [
        'Danny Leon',
        'Computer Scientist',
        'Newark',
        new Date('2010-01-09').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        220000,
      ],
      [
        'Lane Lee',
        'Corporate Counselor',
        'Cincinnati',
        new Date('2010-05-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        180000,
      ],
      [
        'Jesse Hall',
        'Business Analyst',
        'Baltimore',
        new Date('2011-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        99000,
      ],
      [
        'Danni Hudson',
        'Agency Legal Counsel',
        'Tampa',
        new Date('2013-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        90000,
      ],
      [
        'Terry Macdonald',
        'Commercial Specialist',
        'Miami',
        new Date('2011-12-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        140000,
      ],
      [
        'Justice Mccarthy',
        'Attorney',
        'Tucson',
        new Date('2010-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        330000,
      ],
      [
        'Silver Carey',
        'Computer Scientist',
        'Memphis',
        new Date('2010-05-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        250000,
      ],
      [
        'Franky Miles',
        'Industrial Analyst',
        'Buffalo',
        new Date('2010-08-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        190000,
      ],
      [
        'Glen Nixon',
        'Corporate Counselor',
        'Arlington',
        new Date('2016-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        80000,
      ],
      [
        'Gabby Strickland',
        'Business Process Consultant',
        'Scottsdale',
        new Date('2015-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        45000,
      ],
      [
        'Mason Ray',
        'Computer Scientist',
        'San Francisco',
        new Date('2018-01-01').toLocaleString('en-US', dateTimeOptions).replace(',', ''),
        142000,
      ],
    ];

    const options = {
      filter: true,
      onFilterChange: (changedColumn, filterList) => {
        console.log(changedColumn, filterList);
      },
      selectableRows: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      rowsPerPage: 10,
    };

    return <MUIDataTable title={'ACME Employee list'} data={data} columns={columns} options={options} />;
  }
}

ReactDOM.render(<Example />, document.getElementById('app-root'));
