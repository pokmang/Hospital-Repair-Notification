import TDepartment from './TDepartment';
import TPosition from './TPosition';

type TUser = {
    id: string,
    name: string,
    department: TDepartment,
    position: TPosition,
    phone: string,
    avatar: string
}

export default TUser;