export class Broker{
    id:number;
    host:string;
}
export class Topic{
    name:String;
    configs:any;
    partitions:Partition[];
}
export class Partition{
    partition:number;
    leader:number;
    replicas:any;
}