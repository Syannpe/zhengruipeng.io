//与条件类型的拓展
type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true }
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>

let o: ObjectsNeedingGDPRDeletion = {
    id: false,
    name: true
}