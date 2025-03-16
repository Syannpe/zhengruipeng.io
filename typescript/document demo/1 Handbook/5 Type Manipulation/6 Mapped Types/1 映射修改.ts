//有两种修饰符，readonly和？，分别表示只读和可选。
//可以在索引签名附近对这两个修饰符进行添加和删除，
//分别用+和-，例如：
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
}
type User = Concrete<MaybeUser>