import TDepartment from "./TDepartment";

type TRepair = {
    id: string,
    detail: string,
    device: string,
    status: string,
    informer: string,
    photos: string[],
    repairer: string,
    noti_date: Date,
    repair_date: Date,
    repaired_date: Date,
    cancel_date: Date,
    evaluate_date: Date,
    department: TDepartment
    cancel_detail: string
}

export default TRepair;