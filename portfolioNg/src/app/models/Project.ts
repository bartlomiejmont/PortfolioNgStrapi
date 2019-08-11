interface Image {
    id: number;
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    provider: string;
    public_id?: any;
    created_at: string;
    updated_at: string;
  }

export class Project {
    id: number;
    title: string;
    text: string;
    permission?: any;
    created_at: string;
    updated_at: string;
    image: Image;
}