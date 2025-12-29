import { Table, Checkbox, Avatar } from "flowbite-react";
import EditUserModal from "../helpers/EditUser";
import DeleteUserModal from "../helpers/DeleteModal";

const users = [
  {
    id: 1,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    position: "Front-end developer",
    country: "United States",
    status: "Active",
    avatar: "/images/users/neil-sims.png",
  },
  {
    id: 2,
    name: "Roberta Casas",
    email: "roberta.casas@flowbite.com",
    position: "Designer",
    country: "Spain",
    status: "Active",
    avatar: "/images/users/roberta-casas.png",
  },
  {
    id: 3,
    name: "Michael Gough",
    email: "michael.gough@flowbite.com",
    position: "React developer",
    country: "United Kingdom",
    status: "Active",
    avatar: "/images/users/michael-gough.png",
  },
  {
    id: 4,
    name: "Bonnie Green",
    email: "bonnie.green@flowbite.com",
    position: "UI/UX Engineer",
    country: "Australia",
    status: "Offline",
    avatar: "/images/users/bonnie-green.png",
  },
];

export default function AllUsersTable() {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>
          <label className="sr-only">Select all</label>
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Position</Table.HeadCell>
        <Table.HeadCell>Country</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {users.map((user) => (
          <Table.Row key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="flex items-center gap-x-3">
              <Avatar img={user.avatar} alt={user.name} rounded />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
              </div>
            </Table.Cell>
            <Table.Cell>{user.position}</Table.Cell>
            <Table.Cell>{user.country}</Table.Cell>
            <Table.Cell>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {user.status}
              </span>
            </Table.Cell>
            <Table.Cell className="space-x-2">
              <EditUserModal user={user} />
              <DeleteUserModal userId={user.id} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
