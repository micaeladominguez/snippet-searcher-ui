import {CreateSnippet, SnippetDescriptor, UpdateSnippet} from '@/data/snippet'
import autoBind from 'auto-bind'
import axios from "axios";
import {SnippetOperations} from "@/data/snippetOperations";
import {Snippet} from "@/util/types";


export class RealSnippetOperations implements SnippetOperations {

  constructor() {
    autoBind(this)
  }

  createSnippet(createSnippet: CreateSnippet): Promise<Snippet> {
    return axios.post(process.env.NEXT_PUBLIC_API_URL+'/api/snippets', createSnippet)
  }

  getSnippetById(id: string): Promise<Snippet | undefined> {
    return axios.get(process.env.NEXT_PUBLIC_API_URL+'/api/snippets'+id)
  }

  listSnippetDescriptors(): Promise<Snippet[]> {
    console.log('api',process.env.NEXT_PUBLIC_API_URL);
    return axios.get(process.env.NEXT_PUBLIC_API_URL+'/api/snippets')
  }

  updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<Snippet> {
    return axios.patch(process.env.NEXT_PUBLIC_API_URL+'/api/snippets'+id, updateSnippet)
  }
}
