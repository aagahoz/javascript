function fun1(param1)
{
    function fun2(param2)
    {
        return (param1 * 3) +  param2;
    }

    return fun2
}

const x1 = fun1(100) // param1 = 100 e karşılık gelir

const x2 = x1(7) // param2 = 200 e karşılık gelir

/// OUTPUTS

console.log(x1)
// fun2(param2)
// {
//         return (param1 * 3) +  param2;
// }


console.log(x2)
//307