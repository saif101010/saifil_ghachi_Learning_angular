export interface Movie {
  id: number;                    
  title: string;                   
  director: string;                
  releaseYear?: number;            
  details: Genre & Format;         
}

interface Genre {
  genre: string;
}

interface Format {
  format: string;
}
