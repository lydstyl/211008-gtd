// This is an example of to protect an API route
import { getSession } from 'next-auth/client'

import { tasks } from '../../../data/someTasks'

const getTasks = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      msg: 'Protected GTD content. You can access this content because you are signed in.',

      tasks: JSON.stringify(tasks),
    })
  } else {
    res.send({
      error:
        'You must be sign in to view the protected content on this page.',
    })
  }
}

export default getTasks

// import { NextApiRequest, NextApiResponse } from "next";
// import { connect } from "utils/database";

// export default async function (req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { db } = await connect();
//     const sightings = await db.collection("sightings").find().toArray();
//     res.status(200);
//     res.json({ sightings });
//   } catch (e) {
//     res.status(500);
//     res.json({ error: "Unable to fetch sightings... sorry" });
//   }
// }
