import { typeDefs as clientTypeDefs} from "./Client/client";
import { typeDefs as demandTypeDefs} from "./Demand/Demand";
import { typeDefs as listTypedefs} from "./List/List";
import { gql } from 'apollo-server-express';

const typeDefs = gql `
	type Query {
		_root: String
	}


	${clientTypeDefs}
	${demandTypeDefs}
	${listTypedefs}
`;

export default typeDefs;