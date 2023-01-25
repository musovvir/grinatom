import { types } from 'mobx-state-tree';
import TicketsStore from "./tickets";

const RootStore = types.model('RootStore', {
    tickets: types.optional(TicketsStore, {}),
})

export default RootStore;
