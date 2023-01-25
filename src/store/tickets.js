import { types } from 'mobx-state-tree';

const Ticket = types.model('Ticket', {
    id: types.identifierNumber,
    price: types.number,
    logoURL: types.string,
    to: types.model({
        route: types.string,
        time: types.string,
        title: types.string,
        travelTime: types.string,
        transplantsCount: types.string,
        transplants: types.string,
    }),
    from: types.maybe(types.model({
        route: types.string,
        time: types.string,
        title: types.string,
        travelTime: types.string,
        transplantsCount: types.string,
        transplants: types.string,
    })),
})

const TicketsStore = types.model('TicketsStore', {
    tickets: types.array(Ticket),
    filteredTickets: types.optional(types.array(Ticket), []),
}).actions(self => {
    return {
        load: function () {
            self.tickets = [
                {
                    id: 1,
                    price: 13400,
                    logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1200px-S7_new_logo.svg.png',
                    to: {
                        route: 'MOW - HKT',
                        time: '10:45 - 08:00',
                        title: 'В ПУТИ',
                        travelTime: '21ч 15м',
                        transplantsCount: '1 пересадка',
                        transplants: 'HKG, JNB',
                    },
                    from: {
                        route: 'MOW - HKT',
                        time: '11:20 - 00:50',
                        title: 'В ПУТИ',
                        travelTime: '13ч 30м',
                        transplantsCount: '1 пересадка',
                        transplants: 'HKG',
                    },
                },
                {
                    id: 2,
                    price: 13000,
                    logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1200px-S7_new_logo.svg.png',
                    to: {
                        route: 'MOW - HKT',
                        time: '10:45 - 08:00',
                        title: 'В ПУТИ',
                        travelTime: '19ч 25м',
                        transplantsCount: '2 пересадки',
                        transplants: 'HKG, JNB',
                    },
                    from: {
                        route: 'MOW - HKT',
                        time: '11:20 - 00:50',
                        title: 'В ПУТИ',
                        travelTime: '13ч 30м',
                        transplantsCount: '1 пересадка',
                        transplants: 'HKG',
                    },
                },
                {
                    id: 3,
                    price: 3500,
                    logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1200px-S7_new_logo.svg.png',
                    to: {
                        route: 'MOW - HKT',
                        time: '10:45 - 08:00',
                        title: 'В ПУТИ',
                        travelTime: '17ч 10м',
                        transplantsCount: '3 пересадки',
                        transplants: 'HKG, JNB',
                    },
                    from: {
                        route: 'MOW - HKT',
                        time: '11:20 - 00:50',
                        title: 'В ПУТИ',
                        travelTime: '13ч 30м',
                        transplantsCount: '1 пересадка',
                        transplants: 'HKG',
                    },
                },
                {
                    id: 4,
                    price: 11800,
                    logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1200px-S7_new_logo.svg.png',
                    to: {
                        route: 'MOW - HKT',
                        time: '10:45 - 08:00',
                        title: 'В ПУТИ',
                        travelTime: '22ч 50м',
                        transplantsCount: '2 пересадки',
                        transplants: 'HKG, JNB',
                    },
                    from: {
                        route: 'MOW - HKT',
                        time: '11:20 - 00:50',
                        title: 'В ПУТИ',
                        travelTime: '13ч 30м',
                        transplantsCount: '1 пересадка',
                        transplants: 'HKG',
                    },
                },
                {
                    id: 5,
                    price: 9100,
                    logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1200px-S7_new_logo.svg.png',
                    to: {
                        route: 'MOW - HKT',
                        time: '10:45 - 08:00',
                        title: 'В ПУТИ',
                        travelTime: '15ч 10м',
                        transplantsCount: '2 пересадки',
                        transplants: 'HKG, JNB',
                    },
                    from: {
                        route: 'MOW - HKT',
                        time: '11:20 - 00:50',
                        title: 'В ПУТИ',
                        travelTime: '13ч 30м',
                        transplantsCount: '1 пересадка',
                        transplants: 'HKG',
                    },
                },
            ];
        },
        afterCreate() {
            self.load();
        },
        setFilters(value) {
            self.filteredTickets = self.filteredTickets.concat(value);
        }
    }
})

export default TicketsStore;
