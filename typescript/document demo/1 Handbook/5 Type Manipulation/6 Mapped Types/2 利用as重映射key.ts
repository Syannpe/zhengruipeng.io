//这个类型使用了映射类型和模板文字类型的特性，
//它可以根据一个给定的类型 Type，
//生成一个包含所有 getter 方法的新类型。
//getter 方法的名字是由 Type 的属性名首字母大写并加上 get 前缀组成的，
//返回值是对应属性的类型。例如，如果 Type 是这样一个接口：
/*
* in相当于for in 循环，把一个并集类型中所有类型全部循环一遍，将类型依次赋值给前面的泛型
* as相当于把前面循环到的类型赋一个可见的值
* */
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;

//删除“kind”属性
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>


type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>
/*结果：
type Config = {
    square: (event: SquareEvent) => void;
    circle: (event: CircleEvent) => void;
}
*/