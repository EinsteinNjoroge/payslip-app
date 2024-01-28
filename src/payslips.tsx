import React, {useState} from "react";

const mockPayslips = [
    {
        "id": "0f5fac30-b134-4458-9f4f-13b3dbc5b77b",
        "fromDate": "2022-01-26",
        "toDate": "2022-01-25",
        "file": "455c1c1d-b4b5-49b5-86b8-a77d9f255ed4.pdf"
    },
    {
        "id": "de0ab61f-2afe-4f10-b406-195ec27f174f",
        "fromDate": "2022-02-26",
        "toDate": "2022-02-25",
        "file": "33048d24-e90f-4e4d-832e-2b5d3ed8a739.pdf"
    },
    {
        "id": "35a2b69e-1853-42fb-8a00-67f4ec1b9a58",
        "fromDate": "2022-03-26",
        "toDate": "2022-03-25",
        "file": "0324f2bd-f383-4a2d-9db9-3da1abde08e2.pdf"
    },
    {
        "id": "530a48e6-019c-438c-9409-42c54f5b0387",
        "fromDate": "2022-04-26",
        "toDate": "2022-04-25",
        "file": "821f31e4-0d83-4186-b828-89bef4740b20.pdf"
    },
    {
        "id": "77d20cdf-5b26-4c03-9e82-62d8149d9ce4",
        "fromDate": "2022-05-26",
        "toDate": "2022-05-25",
        "file": "ecd00e30-005e-4686-b81c-e06cce4147a9.pdf"
    },
    {
        "id": "6b2dc1d4-8c94-4637-b397-0d3c49d87797",
        "fromDate": "2022-06-26",
        "toDate": "2022-06-25",
        "file": "48ead4d7-fda7-4da0-a9dc-11f1d5540596.pdf"
    },
    {
        "id": "1d1263ee-2394-4136-9498-c49b273a1711",
        "fromDate": "2022-07-26",
        "toDate": "2022-07-25",
        "file": "f2d485b9-a6ee-4393-a674-556391d64cad.pdf"
    },
    {
        "id": "059b0697-fe13-4856-a06f-3eaa37b8b944",
        "fromDate": "2022-08-26",
        "toDate": "2022-08-25",
        "file": "875f3f7e-c71f-4e5b-b272-0a9adeaa35eb.pdf"
    },
    {
        "id": "2841e89e-caf7-4fd1-842e-f314208098c5",
        "fromDate": "2022-09-26",
        "toDate": "2022-09-25",
        "file": "022b663d-6382-4302-b355-98a865920b06.pdf"
    },
    {
        "id": "4757a167-df6d-446e-97a9-47b785626749",
        "fromDate": "2022-10-26",
        "toDate": "2022-10-25",
        "file": "162a800d-84c7-4b9a-8d95-3b162f924160.pdf"
    },
    {
        "id": "0fa67522-9701-4b75-a71d-1d22ce0de637",
        "fromDate": "2022-11-26",
        "toDate": "2022-11-25",
        "file": "c5500f15-5222-4361-8302-75d513d79318.pdf"
    },
    {
        "id": "81c002fa-7305-4521-b8a1-772e24e20f25",
        "fromDate": "2022-12-26",
        "toDate": "2022-12-25",
        "file": "820f2972-130e-4605-82f0-5f463e81307c.pdf"
    },
    {
        "id": "9db2fa94-2c0b-4451-8125-96b897e1810e",
        "fromDate": "2023-01-26",
        "toDate": "2023-01-25",
        "file": "852124c1-77b7-4109-a806-82061c0833ab.pdf"
    },
    {
        "id": "67ca84e5-83ab-4f06-90ee-1272de6732b2",
        "fromDate": "2023-02-26",
        "toDate": "2023-02-25",
        "file": "b7932202-d023-4811-9fa6-0b0523516a67.pdf"
    },
    {
        "id": "72109221-7751-41ab-8651-83fa81466405",
        "fromDate": "2023-03-26",
        "toDate": "2023-03-25",
        "file": "99007a55-4068-43f0-992e-770577109122.pdf"
    },
    {
        "id": "562a0542-d146-4805-9366-2fa924298301",
        "fromDate": "2023-04-26",
        "toDate": "2023-04-25",
        "file": "72f00419-74b0-45a0-87fe-6f6118b050fa.pdf"
    },
    {
        "id": "a8015c95-5d09-4d26-80be-7f250b8664fe",
        "fromDate": "2023-05-26",
        "toDate": "2023-05-25",
        "file": "5706674e-3372-4022-a002-93b55472d26d.pdf"
    },
    {
        "id": "2c96c0f3-4d91-4265-9109-9062120016b8",
        "fromDate": "2023-06-26",
        "toDate": "2023-06-25",
        "file": "b357a16a-2735-45fe-a622-71d0be647052.pdf"
    },
    {
        "id": "d517d76a-13f7-4f09-9205-25a827057491",
        "fromDate": "2023-07-26",
        "toDate": "2023-07-25",
        "file": "200d0677-8a81-4c09-b09e-3d0656f090b0.pdf"
    },
    {
        "id": "7f0576ce-6731-4a98-a273-10b07422333d",
        "fromDate": "2023-08-26",
        "toDate": "2023-08-25",
        "file": "94c06382-5b16-4f6e-a093-c0534fa271da.pdf"
    },
    {
        "id": "026d267a-256e-4501-8a28-82a094096735",
        "fromDate": "2023-09-26",
        "toDate": "2023-09-25",
        "file": "f0632001-7b0e-40d1-9f25-5f214e029450.pdf"
    },
    {
        "id": "120c6268-6408-42fe-8f61-98c9567063d3",
        "fromDate": "2023-10-26",
        "toDate": "2023-10-25",
        "file": "11429311-5c51-4a27-a21f-4712de563b97.pdf"
    },
    {
        "id": "95fa8776-7466-4766-9252-9558d1518d82",
        "fromDate": "2023-11-26",
        "toDate": "2023-11-25",
        "file": "0ea971d4-b013-4161-b3e0-a40a8662de84.pdf"
    },
    {
        "id": "b0877545-60c0-4152-a055-a3006d9318df",
        "fromDate": "2023-12-26",
        "toDate": "2023-12-25",
        "file": "2da0f253-0a21-45b0-9321-42262320829d.pdf"
    }
]

function Payslips() {


    const [payslips,] = useState(mockPayslips);

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">From</th>
                                <th scope="col" className="px-6 py-4">To</th>
                                <th scope="col" className="px-6 py-4">Payslip</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                payslips.map((payslips, i) => {
                                    const isOddRow = i % 2 === 0;
                                    const classes = `
                                    ${isOddRow ? "bg-neutral-100" :"bg-white"}
                                    transition 
                                    duration-300 
                                    ease-in-out 
                                    hover:bg-neutral-200
                                    `;

                                    return (
                                        <tr className={classes}>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{i+1}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{payslips.fromDate}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{payslips.toDate}</td>
                                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payslips;
