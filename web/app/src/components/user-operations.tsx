import { User } from "@prisma/client"
    
interface UserOperationProps {
    user: User
}

export const UserOperations = ({ user }: UserOperationProps) => {
  return (
    <div>UserOperations</div>
  )
}
