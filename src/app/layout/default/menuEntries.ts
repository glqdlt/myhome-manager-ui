// {label: 'HOME', url: '', child: [{label: 'Home', url: ''}]},
export const menuEntries: object[] =
    [
        {label: 'Book Manager', child: [{label: 'List', url: 'book'}, {label: 'New', url: 'new'}]},
        {label: 'Server Manager', child: [{label: 'Management', url: 'server'}, {label: 'Add Server', url: 'server/add'}]},
        {
            label: 'Craw Manager',
            child: [{label: 'Dashboard', url: 'craw'}, {label: 'Monitoring', url: 'craw/monitoring'}, {label: 'Settings', url: 'craw/settings'}]
        }
    ]




