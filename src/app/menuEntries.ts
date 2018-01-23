export const MenuEntries =
    [
        {
            label : 'home',
            permission : 'guest',
            state : ''
        },
        {
            label : 'Admin Manager',
            permission : 'admin',
            state : 'home',
            child : [
                {
                    label : 'Server Management',
                    permission : 'admin',
                    state : 'server',
                    child : [
                        {
                            label : 'Settings',
                            permission : 'admin',
                            state : 'settings'
                        },
                        {
                            label : 'Dash board',
                            permission : 'admin',
                            state : 'dashboard'
                        }
                    ]
                },
                {
                    label : 'Book Management',
                    permission : 'admin',
                    state : 'book',
                    child : [
                        {
                            label : 'Settings',
                            permission : 'admin',
                            state : 'settings'
                        },
                        {
                            label : 'Dash board',
                            permission : 'admin',
                            state : 'dashboard'
                        }
                    ]
                },
                {
                    label : 'IOT Management',
                    permission : 'admin',
                    state : 'iot',
                    child : [
                        {
                            label : 'Settings',
                            permission : 'admin',
                            state : 'settings'
                        },
                        {
                            label : 'Dash board',
                            permission : 'admin',
                            state : 'dashboard'
                        }
                    ]
                },
                {
                    label : 'Chat Management',
                    permission : 'admin',
                    state : 'chat',
                    child : [
                        {
                            label : 'Settings',
                            permission : 'admin',
                            state : 'settings'
                        }
                    ]
                },
                {
                    label : 'Site Management',
                    permission : 'admin',
                    state : 'site',
                    child : [
                        {
                            label : 'Settings',
                            permission : 'admin',
                            state : 'settings'
                        },
                        {
                            label : 'Dash board',
                            permission : 'admin',
                            state : 'dashboard'
                        }
                    ]
                }
            ]
        },
        {
            label : 'Data Center(Craw)',
            permission : 'guest',
            state : 'craw',
            child : [
                {
                    label : 'Dash board',
                    permission : 'guest',
                    state : 'dashboard'
                },
                {
                    label : 'Settings',
                    permission : 'admin',
                    state : 'settings'
                }
            ]
        },
        {
            label : 'Wiki',
            permission : 'guest',
            state : 'wiki',
            child : [
                {
                    label : 'Dashboard',
                    permission :'guest',
                    state : 'dashboard'
                },
                {
                    label : 'Settings',
                    permission : 'admin',
                    state : 'settings'
                }
            ]
        },
        {
            label : 'Help desk',
            permission : 'guest',
            state : 'help',
            child : [
                {
                    label : 'Dashboard',
                    permission : 'guest',
                    state : 'dashboard'
                },
                {
                    label : 'Settings',
                    permission : 'admin',
                    state : 'settings'
                }
            ]
        }
    ];