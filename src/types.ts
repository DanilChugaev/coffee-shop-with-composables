export interface Ingredient {
  color: string
  title: string
}

export interface ICoffeeServerCard {
  description: string
  id: number
  image: string
  ingredients: string[]
  title: string
}

export interface ICoffeeCard {
  description: string
  id: number
  image: string
  ingredients: Ingredient[]
  title: string
}
