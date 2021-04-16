import { Container } from 'react-bootstrap'
import './AdminProducts.scss'

interface AdminProductsProps {}

const AdminProducts = (props: AdminProductsProps) => {
  return (
    <Container fluid className="AdminProducts p-0">
      <h1>AdminProducts</h1>
    </Container>
  )
}

export default AdminProducts