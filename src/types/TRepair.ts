import TDepartment from "./TDepartment";

type TRepair = {
    id: string,
    detail: string,
    device: string,
    photos: string[],
    repairer: string,
    noti_date: Date,
    repair_date: Date,
    repaired_date: Date,
    department: TDepartment
}

export default TRepair;