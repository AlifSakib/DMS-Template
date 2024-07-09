import ReusableModal from "@/components/ui/modal";
import Table, { HeaderCell } from "@/components/ui/table";
import { useMemo, useState } from "react";
import { Button, Input, Title } from "rizzui";
import { Checkbox, Avatar, Text, Badge } from "rizzui";

const initialData = [
  {
    id: "1",
    employee: {
      name: "Jon Brown",
      userName: "@fredchaparro",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    designation: {
      role: "Front-End Developer",
      company: "REDQ",
    },
    phoneNumber: "+880136987584",
    email: "jhondoe@aegonui.com",
    status: "Active",
  },
  {
    id: "2",
    employee: {
      name: "Jon Brown",
      userName: "@fredchaparro",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    designation: {
      role: "Front-End Developer",
      company: "REDQ",
    },
    phoneNumber: "+880136987584",
    email: "jhondoe@aegonui.com",
    status: "Active",
  },
  {
    id: "3",
    employee: {
      name: "Jon Brown",
      userName: "@fredchaparro",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    designation: {
      role: "Front-End Developer",
      company: "REDQ",
    },
    phoneNumber: "+880136987584",
    email: "jhondoe@aegonui.com",
    status: "Active",
  },
  {
    id: "4",
    employee: {
      name: "Jon Brown",
      userName: "@fredchaparro",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    designation: {
      role: "Front-End Developer",
      company: "REDQ",
    },
    phoneNumber: "+880136987584",
    email: "jhondoe@aegonui.com",
    status: "Active",
  },
  {
    id: "5",
    employee: {
      name: "Jon Brown",
      userName: "@fredchaparro",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    designation: {
      role: "Front-End Developer",
      company: "REDQ",
    },
    phoneNumber: "+880136987584",
    email: "jhondoe@aegonui.com",
    status: "Active",
  },
  {
    id: "6",
    employee: {
      name: "Jon Brown",
      userName: "@fredchaparro",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    designation: {
      role: "Front-End Developer",
      company: "REDQ",
    },
    phoneNumber: "+880136987584",
    email: "jhondoe@aegonui.com",
    status: "Active",
  },
];

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return <Badge variant="flat">{status}</Badge>;
    case "active":
      return (
        <Badge variant="flat" color="success">
          {status}
        </Badge>
      );
    case "warning":
      return (
        <Badge variant="flat" color="warning">
          {status}
        </Badge>
      );
    case "danger":
      return (
        <Badge variant="flat" color="danger">
          {status}
        </Badge>
      );
    default:
      return null;
  }
}

const getColumns = (
  order: string,
  column: string,
  onHeaderClick: (value: string) => any
) => [
  {
    title: <></>,
    dataIndex: "checked",
    key: "checked",
    width: 50,
    render: (_: string, row: any) => (
      <div className="inline-flex cursor-pointer">
        <Checkbox
          variant="flat"
          onClick={() => {
            // log the row index
            console.log(row.id);
          }}
        />
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Id"
        sortable
        ascending={order === "asc" && column === "id"}
      />
    ),
    onHeaderCell: () => onHeaderClick("id"),
    dataIndex: "id",
    key: "id",
    width: 50,
  },
  {
    title: <HeaderCell title="Employee" />,
    dataIndex: "employee",
    key: "employee",
    width: 250,
    render: (employee: any) => (
      <div className="flex items-center">
        <Avatar name="John Doe" src={employee.avatar} />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Text as="h6" className="mb-0.5 !text-sm font-medium">
            {employee.name}
          </Text>
          <Text as="p" className="text-xs text-gray-400">
            {employee.userName}
          </Text>
        </div>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Designation" />,
    dataIndex: "designation",
    key: "designation",
    width: 320,
    render: (designation: any) => (
      <div>
        <Text as="h6" className="mb-0.5 !text-sm font-medium">
          {designation.role}
        </Text>
        <Text as="p" className="text-xs text-gray-400">
          {designation.company}
        </Text>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Phone Number" />,
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    width: 200,
  },
  {
    title: <HeaderCell title="Email" />,
    dataIndex: "email",
    key: "email",
    width: 200,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: <></>,
    dataIndex: "action",
    key: "action",
    width: 120,
    render: (_: string, row: any) => (
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-primary underline"
          onClick={() => alert(`Edit item #${row.id}`)}
        >
          Edit
        </button>
        <button type="button" className="underline">
          View
        </button>
      </div>
    ),
  },
];

const ConfigureRestrictedFileTypesModal = ({
  isModalOpen,
  closeModal,
}: any) => {
  const [order, setOrder] = useState<string>("desc");
  const [column, setColumn] = useState<string>("");
  const [data, setData] = useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === "desc" ? "asc" : "desc");
      if (order === "desc") {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? -1 : 1))]);
      } else {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? 1 : -1))]);
      }
    },
  });
  const columns: any = useMemo(
    () => getColumns(order, column, onHeaderClick),
    [order, column, onHeaderClick]
  );

  console.log(data, columns);

  return (
    <div>
      <ReusableModal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <div>
          <div className="p-4 ">
            <div className="flex flex-col gap-4">
              <Title as="h5" fontWeight="bold">
                Configure Restricted File Types
              </Title>
              <p>
                Choose file type lists to restrict the import of such files.
              </p>

              <Table data={data} columns={columns} className="text-sm" />

              <div className="flex gap-4  justify-end">
                <Button onClick={closeModal} className="btn btn-secondary w-32">
                  Cancle
                </Button>
                <Button className="btn btn-secondary w-32">OK</Button>
              </div>
            </div>
          </div>
        </div>
      </ReusableModal>
    </div>
  );
};

export default ConfigureRestrictedFileTypesModal;
