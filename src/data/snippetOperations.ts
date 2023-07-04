import {CreateSnippet, UpdateSnippet} from '@/data/snippet'
import {Snippet} from "@/util/types";

export interface SnippetOperations {
  listSnippetDescriptors(): Promise<Snippet[]>

  createSnippet(createSnippet: CreateSnippet): Promise<Snippet>

  getSnippetById(id: string): Promise<Snippet | undefined>

  updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<Snippet>
}
