// {label: 'HOME', url: '', child: [{label: 'Home', url: ''}]},


// bug fix
// url : 기입부분에 / 슬러쉬를 안 붙일 경우, 상대 경로로 만들어진다. 이게 무슨 말이냐면 url : new 라고 할 경우, 부모 도메인 뒤에 (new) 이런식으로 추가 되는 형태가 된다.
// url: /new 라고 할 경우에는 절대 경로로 가기 때문에 직관적으로 entry 를 짤 수 있다.

export const menuEntries: object[] =
    [
        {label: 'Book Manager', child: [{label: 'List', url: '/book'}, {label: 'New', url: '/book/new'}]},
        {label: 'Server Manager', child: [{label: 'Management', url: '/server'}, {label: 'Add Server', url: '/server/add'}]},
        {
            label: 'Craw Manager',
            child: [{label: 'Dashboard', url: '/craw'}, {label: 'Monitoring', url: '/craw/monitoring'}, {label: 'Settings', url: '/craw/settings'}]
        }
    ]

