//Создайте тип Status с возможными значениями: "pending", "in-progress", "completed".
type Status = 'pending' | 'in-progress' | 'completed';
// Создайте тип User с полями: name: string, age: number, status: Status.
interface  User {
    name: string;
    age: number;
    status: Status;
}
//  Создайте функцию updateStatus, которая принимает объект User и новый status: Status и возвращает обновленный объект User.

function updateStatus(user:User, newStatus: Status):User {
    return {
        ... user 
    
    }}
//2
//Создайте тип HttpMethod с возможными значениями: "GET", "POST", "PUT", "DELETE".
type HttpMethod = "Cet" | "Post" | "Put" | "Delete";
//* Создайте тип Request с полями: method: HttpMethod, url: string, body?: any.
type Request = {
    method: HttpMethod;
    url: string;
    body?: any;
};
function makeRequest(request:Request):string{
    const{ method , url , body}=
    request;

}

//Создайте функцию logValue, которая принимает значение любого типа T и выводит его в консоль.
// Используйте эту функцию для вывода разных типов данных.
function logValue<T>(value: T):void{
    console.log(value);
    
}
//Partial и Required:
// Создайте объект типа User c полями name, age и email.
interface User {
    name: string;
    age: number;
    email: string;
}
// Используйте Partial<User> для создания нового объекта, который может содержать только часть свойств объекта User.
const PartialUser: Partial<User> = {
    name: "Sam"
};
console.log(PartialUser);
//Используйте Required<User> для создания нового объекта, который обязательно должен содержать все свойства объекта User.

const requiredUser: Requred<User> =
{
 name: "San",
 age: 45,
 email: "San@gamail.com"
};
console.log(requiredUser);

// Pick и Omit:
//Используйте Pick<User, 'name' | 'age'> для создания нового объекта, содержащего только свойства name и age объекта User.
type UserNameAndAge = Pick<User,
'name'|'age'>;
const user: UserNameAndAge = {
    name: "Sam",
    age: 40
};
console.log(user);
//Используйте Omit<User, 'email'> для создания нового объекта, который не содержит свойство email.
type UserWithoutEmail = Omit<UserActivation,'email'>;
const user: UserWithoutEmail = {
   name: "Anna"
};
console.log(user);
//Readonly:
//Создайте объект user типа User.
type ReadonlyUser = Readonly<User>;
//Используйте Readonly<User> для создания нового объекта, который будет только для чтения. Попробуйте изменить значение одного из свойств этого объекта и посмотрите, что произойдет.
const user: ReadonlyUser = {
    name: " Anna",
    age : 23,
};
user.age = 32;//Ошибка Cannot assign to 'age' because it is a read-only property.
console.log(user);

//Record
//Создайте тип UserRecord как Record<string, User>, в котором ключ - это идентификатор пользователя, а значение - объект User. Используйте этот тип для создания коллекции пользователей.
const UserRecord = Record<string ,User>;
const users: UserRecord = {
    "1":{
        name: " Kaan",
        age: 45,
        email: " Kaan@gmail.com"
    },
    "2":{
        name: "Bob",
        age: 25,
        email: "bob@example.com"
    }
};
console.log(users);
//typeof: Используйте оператор typeof для определения типа переменной и вывода его в консоль.
let userName: string = "Alice";
console.log("Тип переменной userName:", typeof userName); // string











