import {CreateSnippet, SnippetDescriptor, UpdateSnippet} from '@/data/snippet'
import autoBind from 'auto-bind'
import axios from "axios";
import {SnippetOperations} from "@/data/snippetOperations";
import {Snippet} from "@/util/types";
import {getCookie} from "cookies-next";


export class RealSnippetOperations implements SnippetOperations {
  headers = {
    'Authorization': `Bearer ${getCookie("token")}`,
    'Content-Type': 'application/json'
  }
  constructor() {
    autoBind(this)
  }

  createSnippet(createSnippet: CreateSnippet): Promise<Snippet> {
    return axios.post('/backend/snippets/create', createSnippet,{headers: this.headers})
  }

  getSnippetById(id: string): Promise<Snippet | undefined> {
    return axios.get('/backend/snippets/'+id,{headers: this.headers})
  }

  listSnippetDescriptors(): Promise<Snippet[]> {
    return axios.get('/backend/snippets',{headers: this.headers})
  }

  updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<Snippet> {
    return axios.patch('/backend/update/'+id, updateSnippet,{headers: this.headers})
  }
}
