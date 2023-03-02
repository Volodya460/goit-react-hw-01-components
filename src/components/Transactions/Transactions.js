import PropTypes from 'prop-types';
import { Tbody, Thead, Table, TabletTr } from './Transactions.styled';
export default function Transactions({ data }) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <Tbody>
        {data.map(el => {
          return (
            <TabletTr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </TabletTr>
          );
        })}
      </Tbody>
    </Table>
  );
}

Transactions.propTypes = [
  PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
];
