import Games, { GamesTemplateProps } from 'templates/Games'

import filterItemsMock from 'components/ExploreSidebar/mock'
import gameCardMock from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gameCardMock,
      filterItems: filterItemsMock
    }
  }
}
