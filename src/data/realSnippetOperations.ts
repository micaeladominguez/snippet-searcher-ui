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
    return axios.post('/backend/snippets/create', createSnippet)
  }

  getSnippetById(id: string): Promise<Snippet | undefined> {
    return axios.get('/backend/snippets/'+id)
  }

  listSnippetDescriptors(): Promise<Snippet[]> {
    return axios.get('/backend/snippets')
  }

  updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<Snippet> {
    return axios.patch('/backend/update/'+id, updateSnippet)
  }
}
