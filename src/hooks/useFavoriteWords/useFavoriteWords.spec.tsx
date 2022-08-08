import {renderHook, act} from '@testing-library/react'
import useFavoriteWords from './useFavoriteWords'

const makeSut = () => {
    const { result } = renderHook(() => useFavoriteWords())
    return result
}

describe('useFavoriteWords - Hook', () => {
    test('should render with initial data state', () => {
      const result = makeSut()
      expect(result.current.favoriteWords).toEqual([])
    })
    
    test('should add word to favorite words list', () => {
        const result = makeSut()
        act(() => {
            result.current.setWordAsFavorite('one')
            result.current.setWordAsFavorite('two')
            result.current.setWordAsFavorite('three')
        })

        expect(result.current.favoriteWords).toEqual(['one', 'two', 'three'])
    })
})
