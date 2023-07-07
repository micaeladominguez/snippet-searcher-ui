import {CreateSnippet, SnippetDescriptor, UpdateSnippet} from '@/data/snippet'
import autoBind from 'auto-bind'
import axios from "axios";
import {SnippetOperations} from "@/data/snippetOperations";
import {Snippet} from "@/util/types";


export class RealSnippetOperations implements SnippetOperations {

  constructor() {
    autoBind(this)
    console.log(process.env.NEXT_PUBLIC_API_URL)
  }

  createSnippet(createSnippet: CreateSnippet): Promise<Snippet> {
    return axios.post(process.env.NEXT_PUBLIC_API_URL+'/backend/snippets', createSnippet)
  }

  getSnippetById(id: string): Promise<Snippet | undefined> {
    return axios.get(process.env.NEXT_PUBLIC_API_URL+'/backend/snippets/'+id)
  }

  listSnippetDescriptors(): Promise<Snippet[]> {
    console.log(process.env.NEXT_PUBLIC_API_URL+'/backend/snippets/')
    return axios.get(process.env.NEXT_PUBLIC_API_URL+'/backend/snippets')
  }

  updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<Snippet> {
    return axios.patch(process.env.NEXT_PUBLIC_API_URL+'/backend/snippets/'+id, updateSnippet)
  }
}
