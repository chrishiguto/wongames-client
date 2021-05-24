import Link from 'next/link'
import { ChevronsDown } from '@styled-icons/boxicons-solid'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'

import Dropdown from 'components/Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronsDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" prefetch={false} passHref>
        <S.Link>
          <FavoriteBorder />
          <span>My profile</span>
        </S.Link>
      </Link>
      <Link href="/wishlist" prefetch={false} passHref>
        <S.Link>
          <ExitToApp />
          <span>Wishlist</span>
        </S.Link>
      </Link>
      <Link href="logout" prefetch={false} passHref>
        <S.Link title="Sign out">
          <AccountCircle />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
