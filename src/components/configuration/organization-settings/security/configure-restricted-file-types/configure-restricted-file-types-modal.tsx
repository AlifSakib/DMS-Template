import ReusableModal from "@/components/ui/modal";
import Table, { HeaderCell } from "@/components/ui/table";
import React, { useState, useMemo, useEffect } from "react";
import { Badge, Checkbox, Button, Text, Title, Input } from "rizzui"; // adjust imports according to your setup

const initialData = [
  {
    id: "1",
    name: "Text Files",
    type: "system",
  },
  {
    id: "2",
    name: "Graphics Files",
    type: "system",
  },
  {
    id: "3",
    name: "Audio Files",
    type: "system",
  },
];

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
            console.log(row);
          }}
        />
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Name"
        sortable
        ascending={order === "asc" && column === "name"}
      />
    ),
    onHeaderCell: () => onHeaderClick("name"),
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: (
      <HeaderCell
        title="Type"
        sortable
        ascending={order === "asc" && column === "type"}
      />
    ),
    onHeaderCell: () => onHeaderClick("type"),
    dataIndex: "type",
    key: "type",
    width: 250,
  },
  {
    title: <></>,
    dataIndex: "action",
    key: "action",
    width: 120,
    render: (_: string, row: any) => (
      <div className="flex items-center gap-2 ">
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
  const [search, setSearch] = useState<string>("");

  const columns: any = useMemo(() => {
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
    return getColumns(order, column, onHeaderClick);
  }, [order, column, data]);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

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

              <div className="flex justify-end">
                <Input
                  type="text"
                  placeholder="Search by name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <Table
                data={filteredData}
                columns={columns}
                className="text-sm"
                rowClassName={(record, index) =>
                  index % 2 === 0 ? "bg-gray-100" : ""
                }
                rowKey="id"
              />

              <div className="flex gap-4  justify-end">
                <Button onClick={closeModal} className="btn btn-secondary w-32">
                  Cancel
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
