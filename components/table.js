import { Table } from "@nextui-org/react";

const DataTable = ({list})=>  {
  return (
    <Table
    aria-label="Example static collection table"
    

    >
      <Table.Header>
        <Table.Column key="date" >
          Year
        </Table.Column>
        <Table.Column key="value" >
          Values
        </Table.Column>
      </Table.Header>
      <Table.Body>
        {list.map((element,index)=>{
            return (
                <Table.Row key={element.date}>
                    <Table.Cell>{element.date}</Table.Cell>
                    <Table.Cell>{element.value}</Table.Cell>
                </Table.Row>
            )
        })
        }
      </Table.Body>
      
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={7}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
  );
}

export default DataTable
