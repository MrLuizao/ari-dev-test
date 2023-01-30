
export interface ResponseDataInterface{

    "data": ModelDataResponse[];
    "status": string;
    "message": string;
}

export interface ModelDataResponse{

    "employee_age": number;
    "employee_name": string
    "employee_salary": number;
    "id": number;
}