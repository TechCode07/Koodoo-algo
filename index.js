//testcase 1
const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]

const accountTypeChecker = (accountBalance) => {
    try {
        let result = 'A';
        let accountBalanceArr = [];

        //validate parameter is Array
        if (!Array.isArray(accountBalance)) {
            console.log("Account History Data Parameter is not in array");
            return false;
        }

        accountBalance.forEach((accBalance) => {
            //validate month number
            if (accBalance.monthNumber == undefined || accBalance.monthNumber == null || isNaN(accBalance.monthNumber)) {
                console.log("Please enter valid month number");
                return false;
            }
            //sort according to month number
            let balanceAmt = accBalance.account.balance && accBalance.account.balance.amount ? accBalance.account.balance.amount : 0;
            accountBalanceArr.splice(accBalance.monthNumber, 0, balanceAmt);
        });

        //find difference amount between array of elements and decide the type of account
        let diff = accountBalanceArr[0] - accountBalanceArr[1]
        for (let i = 1; i < accountBalanceArr.length - 1; i++) {
            if ((accountBalanceArr[i] - accountBalanceArr[i + 1]) === diff) {
                result = 'B'
            }
        }
        console.log(result);
        return result;
    }
    catch (e) {
        console.log(e);
    }
};

accountTypeChecker(accountBalanceHistory);

