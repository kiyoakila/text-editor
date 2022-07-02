import nc from 'next-connect'
import middleware from '../../../middleware/all'
import onError from '../../../middleware/error'
import { folder } from '../../../db'

const handler = nc({
  onError,
})

handler.use(middleware)

handler.post(async (req, res) => {
  const newFolder = await folder.createFolder(req.db, {
    createdBy: req.user.id,
    ...req.body,
    name: req.body.name,
  })
  res.send({ data: newFolder })
})

export default handler
