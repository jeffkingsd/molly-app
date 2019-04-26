export class Authorinfo {
    reimbursementId: number;
    author: number;
    amount: number;
    dateSubmitted: string;
    dateResolved: string;
    description: string;
    resolver: number;
    statusId: number;
    typeId: number;

    constructor(reimbusementId = 0, author = 0, amount = 0, dateSubmitted = '', dateResolved = '', description ='', resolver = 0, statusId = 0, typeId =0){
        this.reimbursementId = reimbusementId;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = dateSubmitted;
        this.dateResolved = dateResolved;
        this.description = description;
        this.resolver = resolver;
        this.statusId = statusId;
        this.typeId = typeId;
    }
}