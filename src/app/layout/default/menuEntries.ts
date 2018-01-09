export const menuEntries: object[] =
    [
        {label: 'HOME', url: '', child: [{label: 'Home', url: ''}]},
        {label: 'Book Manager',url: 'book',child: [{label: 'List', url: 'book'}, {label: 'New', url: 'book/new'}]},
        {label: 'Server Manager', url: 'server', child: [{label: 'Management', url: 'server'}, {label: 'Add Server', url: 'server/add'}]},
        {label: 'Craw Manager',url: 'craw',child: [{label: 'Dashboard', url: 'craw'}, {label: 'Monitoring', url: 'craw/monitoring'}, {label: 'Settings', url: 'craw/settings'}]}
    ]
