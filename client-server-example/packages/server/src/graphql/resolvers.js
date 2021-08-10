import { resolvers as demandResolvers} from "./Demand/Demand";
import { resolvers as clientResolvers} from "./Client/client";
import {resolvers as listResolvers} from './List/List';

const resolvers = {
	...demandResolvers,
	...listResolvers,
	...clientResolvers,

	Query: {
		...demandResolvers.Query,
		...clientResolvers.Query,
	}
};

export default resolvers;