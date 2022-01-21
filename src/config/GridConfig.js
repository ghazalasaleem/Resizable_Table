export const data = [
  {
    key: '1',
    job:'Job Id-1PA2323',
    desc:'Something that is worth doing. Something that is worth doing. Something that is worth doing.',
    comment:'Michael Jordan, Obama a champion, Mandela a champion, Serena a champion',
    date: '31 Jan 2019'
  },
  {
    key: '2',
    job:'Job Id-781S34U34678',
    desc:'Task to be done asap. Task to be done asap. Task to be done asap.',
    comment:'Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion',
    date: '31 December 2019'
  },
  {
    key: '3',
    job:'Job Id-A32G7A12A32G7AA12CFGH',
    desc:'If you want to do, do it. else leave it. If you want to do, do it. else leave it.If you want to do, do it. else leave it',
    comment:'Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion, Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion',
    date: '31 May 2019'
  },
  {
    key: '4',
    job:'Job Id-QWCFS1212A12CFGH',
    desc:'If you want to do, do it. else leave it. If you want to do, do it. else leave it.If you want to do, do it. else leave it',
    comment:'Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion, Michael Jordan, Obama a champion, Mandela a champion, Serena a champion, Wendy a champion, Shelly-Ann a champion',
    date: '31 January 2021'
  }
];

export const columnsData = [
  {
    title: 'Job',
    dataIndex: 'job',
    key: 'job',
    ellipsis: true,
    render: (label) => (<span>{label}</span>),
    isResized: false,
    width: 400,
    isFixed: false
    
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    ellipsis: true,
    render: (label) => (<span>{label}</span>),
    isResized: false,
    width: 200,
    isFixed: false
    
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
    render: (label) => (<span>{label}</span>),
    isResized: false,
    width: 200,
    isFixed: false
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
    ellipsis: true,
    render: (label) => (<span>{label}</span>),
    isResized: false,
    width: 500,
    isFixed: false
  },
];
