import { useEffect } from 'react'
import {Pagination} from 'react-bootstrap'
import { setTotalCount } from '../../store/actions-creators/device'
import { useActions } from '../../store/hooks/authAction'
import { useTypedSelector } from '../../store/hooks/TypedSelector'

const Pages = () => {
  const { totalCount, limit, page } = useTypedSelector(state => state.device)
  const { setPage, setTotalCount } = useActions()

  const pageCount = Math.ceil(totalCount / limit)
  let pages: Array<number> = []

  for(let i: number = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Pagination className="mt-5">
      {pages.map((p) => 
         <Pagination.Item
          key={p}
          active={page === p}
          onClick ={() => setPage(p)}
        >
          {p}
        </Pagination.Item>
      )}
    </Pagination>
  )
}

export default Pages
