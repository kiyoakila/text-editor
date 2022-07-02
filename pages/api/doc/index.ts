import nc from 'next-connect'
import middleware from '../../../middleware/all'
import onError from '../../../middleware/error'
import { doc } from '../../../db'

const handler = nc({
  onError,
})

handler.use(middleware)

handler.post(async (req, res) => {
  const newDoc = await doc.createDoc(req.db, {
    createdBy: req.user.id,
    ...req.body,
  })
  res.send({ data: newDoc })
})

export default handler
