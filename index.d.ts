export interface FileType {
  appRoot: string;
  hostType: string;
  path: string;
  name: string;
  key: string;
}

export function emberRelatedFiles(relativeFilePath: string): Promise<{ label: string, path: string }[]>;
