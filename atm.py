pin = "1234"
balance = 10000

user_pin = input("Enter ATM PIN: ")

if user_pin == pin:

    while True:

        print("\n===== ATM MENU =====")
        print("1. Check Balance")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("Balance =", balance)

        elif choice == "2":
            amount = int(input("Enter amount: "))
            balance = balance + amount
            print("Deposit Successful")

        elif choice == "3":
            amount = int(input("Enter amount: "))
            if amount <= balance:
                balance = balance - amount
                print("Withdrawal Successful")
            else:
                print("Insufficient Balance")

        elif choice == "4":
            print("Thank You")
            break

        else:
            print("Invalid Choice")

else:
    print("Wrong PIN")
