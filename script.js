class Bank
{
    constructor()
    {
        this.balance = 100
    }

    deposit(money)
    {
        this.balance += money
    }

    withdraw(money)
    {
        if(money > this.balance)
            console.log("account limit exceeded")
        else
            this.balance -= money
    }
}

const error = document.getElementById('err')
const ans = document.getElementById('ans')

let person = null
const onCreate = () =>
{
    person = new Bank()
    ans.innerHTML = `<p>Amount: $${person.balance}.00</p>`
    error.innerHTML = ``
}

const onDeposit = () =>
{
    if(person == null)
    {
        error.innerHTML = `<p>*First Create Account</p>`
    }
    else
    {
        const amt = document.getElementById('amt').value
        person.balance += Number(amt)
        ans.innerHTML = `<p>Amount: $${person.balance}.00</p>`
    }
}

const onWithdraw = () =>
{
    if(person == null)
    {
        error.innerHTML = `<p>*First Create Account</p>`
    }
    else
    {
        const amt = document.getElementById('amt').value
        if(amt > person.balance)
        {
            error.innerHTML = `<p>*Not enough Balance</p>`
            return
        }
        person.balance = person.balance - Number(amt)
        ans.innerHTML = `<p>Amount: $${person.balance}.00</p>`
    }
}
