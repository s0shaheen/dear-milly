import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { PostItem } from "@/types"

const postsDirectory = path.join(process.cwd(), "posts")

export const getSortedPosts = (): PostItem[] => {
    const fileNames = fs.readdirSync(postsDirectory)
  
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, "")
  
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf-8")
  
      const matterResult = matter(fileContents)
  
      return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
      }
    })
  
    return allPostsData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        if (dateOne.isBefore(dateTwo)) {
          return -1
        } else if (dateTwo.isAfter(dateOne)) {
          return 1
        } else {
          return 0
        }
      })
  }

  export const getPostData = async (id: string) => {
    const fullPath = path.join(postsDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY")
    }
  }