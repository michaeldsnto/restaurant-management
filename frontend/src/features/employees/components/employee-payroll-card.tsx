interface Props {

    basicSalary: number;

    bonus: number;

    deduction: number;

}

export default function EmployeePayrollCard({

    basicSalary,

    bonus,

    deduction,

}: Props) {

    const totalSalary =
        basicSalary +
        bonus -
        deduction;

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-6
    ">

            <h2 className="
        mb-6
        text-xl
        font-semibold
      ">
                Payroll Information
            </h2>

            <div className="space-y-4">

                <div className="
          flex
          justify-between
        ">
                    <span>Basic Salary</span>
                    <span>${basicSalary}</span>
                </div>

                <div className="
          flex
          justify-between
        ">
                    <span>Bonus</span>
                    <span>${bonus}</span>
                </div>

                <div className="
          flex
          justify-between
        ">
                    <span>Deduction</span>
                    <span>${deduction}</span>
                </div>

                <div className="
          mt-4
          border-t
          border-zinc-800
          pt-4
        ">

                    <div className="
            flex
            justify-between
            font-bold
          ">
                        <span>Total Salary</span>
                        <span>
                            ${totalSalary}
                        </span>
                    </div>

                </div>

            </div>

        </div>

    );

}