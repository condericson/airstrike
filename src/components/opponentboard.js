import React from 'react';
import {connect} from 'react-redux';


export function OpponentBoard(props) {
    return (
      <div className="opponentBoard">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td className="opponentcell 1-1"></td>
              <td className="opponentcell 1-2"></td>
              <td className="opponentcell 1-3"></td>
              <td className="opponentcell 1-4"></td>
              <td className="opponentcell 1-5"></td>
              <td className="opponentcell 1-6"></td>
              <td className="opponentcell 1-7"></td>
              <td className="opponentcell 1-8"></td>
              <td className="opponentcell 1-9"></td>
              <td className="opponentcell 1-10"></td>
              <td className="opponentcell 1-11"></td>
              <td className="opponentcell 1-12"></td>
              <td className="opponentcell 1-13"></td>
              <td className="opponentcell 1-14"></td>
              <td className="opponentcell 1-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 2-1"></td>
              <td className="opponentcell 2-2"></td>
              <td className="opponentcell 2-3"></td>
              <td className="opponentcell 2-4"></td>
              <td className="opponentcell 2-5"></td>
              <td className="opponentcell 2-6"></td>
              <td className="opponentcell 2-7"></td>
              <td className="opponentcell 2-8"></td>
              <td className="opponentcell 2-9"></td>
              <td className="opponentcell 2-10"></td>
              <td className="opponentcell 2-11"></td>
              <td className="opponentcell 2-12"></td>
              <td className="opponentcell 2-13"></td>
              <td className="opponentcell 2-14"></td>
              <td className="opponentcell 2-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 2-1"></td>
              <td className="opponentcell 2-2"></td>
              <td className="opponentcell 2-3"></td>
              <td className="opponentcell 2-4"></td>
              <td className="opponentcell 2-5"></td>
              <td className="opponentcell 2-6"></td>
              <td className="opponentcell 2-7"></td>
              <td className="opponentcell 2-8"></td>
              <td className="opponentcell 2-9"></td>
              <td className="opponentcell 2-10"></td>
              <td className="opponentcell 2-11"></td>
              <td className="opponentcell 2-12"></td>
              <td className="opponentcell 2-13"></td>
              <td className="opponentcell 2-14"></td>
              <td className="opponentcell 2-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 3-1"></td>
              <td className="opponentcell 3-2"></td>
              <td className="opponentcell 3-3"></td>
              <td className="opponentcell 3-4"></td>
              <td className="opponentcell 3-5"></td>
              <td className="opponentcell 3-6"></td>
              <td className="opponentcell 3-7"></td>
              <td className="opponentcell 3-8"></td>
              <td className="opponentcell 3-9"></td>
              <td className="opponentcell 3-10"></td>
              <td className="opponentcell 3-11"></td>
              <td className="opponentcell 3-12"></td>
              <td className="opponentcell 3-13"></td>
              <td className="opponentcell 3-14"></td>
              <td className="opponentcell 3-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 4-1"></td>
              <td className="opponentcell 4-2"></td>
              <td className="opponentcell 4-3"></td>
              <td className="opponentcell 4-4"></td>
              <td className="opponentcell 4-5"></td>
              <td className="opponentcell 4-6"></td>
              <td className="opponentcell 4-7"></td>
              <td className="opponentcell 4-8"></td>
              <td className="opponentcell 4-9"></td>
              <td className="opponentcell 4-10"></td>
              <td className="opponentcell 4-11"></td>
              <td className="opponentcell 4-12"></td>
              <td className="opponentcell 4-13"></td>
              <td className="opponentcell 4-14"></td>
              <td className="opponentcell 4-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 5-1"></td>
              <td className="opponentcell 5-2"></td>
              <td className="opponentcell 5-3"></td>
              <td className="opponentcell 5-4"></td>
              <td className="opponentcell 5-5"></td>
              <td className="opponentcell 5-6"></td>
              <td className="opponentcell 5-7"></td>
              <td className="opponentcell 5-8"></td>
              <td className="opponentcell 5-9"></td>
              <td className="opponentcell 5-10"></td>
              <td className="opponentcell 5-11"></td>
              <td className="opponentcell 5-12"></td>
              <td className="opponentcell 5-13"></td>
              <td className="opponentcell 5-14"></td>
              <td className="opponentcell 5-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 6-1"></td>
              <td className="opponentcell 6-2"></td>
              <td className="opponentcell 6-3"></td>
              <td className="opponentcell 6-4"></td>
              <td className="opponentcell 6-5"></td>
              <td className="opponentcell 6-6"></td>
              <td className="opponentcell 6-7"></td>
              <td className="opponentcell 6-8"></td>
              <td className="opponentcell 6-9"></td>
              <td className="opponentcell 6-10"></td>
              <td className="opponentcell 6-11"></td>
              <td className="opponentcell 6-12"></td>
              <td className="opponentcell 6-13"></td>
              <td className="opponentcell 6-14"></td>
              <td className="opponentcell 6-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 7-1"></td>
              <td className="opponentcell 7-2"></td>
              <td className="opponentcell 7-3"></td>
              <td className="opponentcell 7-4"></td>
              <td className="opponentcell 7-5"></td>
              <td className="opponentcell 7-6"></td>
              <td className="opponentcell 7-7"></td>
              <td className="opponentcell 7-8"></td>
              <td className="opponentcell 7-9"></td>
              <td className="opponentcell 7-10"></td>
              <td className="opponentcell 7-11"></td>
              <td className="opponentcell 7-12"></td>
              <td className="opponentcell 7-13"></td>
              <td className="opponentcell 7-14"></td>
              <td className="opponentcell 7-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 8-1"></td>
              <td className="opponentcell 8-2"></td>
              <td className="opponentcell 8-3"></td>
              <td className="opponentcell 8-4"></td>
              <td className="opponentcell 8-5"></td>
              <td className="opponentcell 8-6"></td>
              <td className="opponentcell 8-7"></td>
              <td className="opponentcell 8-8"></td>
              <td className="opponentcell 8-9"></td>
              <td className="opponentcell 8-10"></td>
              <td className="opponentcell 8-11"></td>
              <td className="opponentcell 8-12"></td>
              <td className="opponentcell 8-13"></td>
              <td className="opponentcell 8-14"></td>
              <td className="opponentcell 8-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 9-1"></td>
              <td className="opponentcell 9-2"></td>
              <td className="opponentcell 9-3"></td>
              <td className="opponentcell 9-4"></td>
              <td className="opponentcell 9-5"></td>
              <td className="opponentcell 9-6"></td>
              <td className="opponentcell 9-7"></td>
              <td className="opponentcell 9-8"></td>
              <td className="opponentcell 9-9"></td>
              <td className="opponentcell 9-10"></td>
              <td className="opponentcell 9-11"></td>
              <td className="opponentcell 9-12"></td>
              <td className="opponentcell 9-13"></td>
              <td className="opponentcell 9-14"></td>
              <td className="opponentcell 9-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 10-1"></td>
              <td className="opponentcell 10-2"></td>
              <td className="opponentcell 10-3"></td>
              <td className="opponentcell 10-4"></td>
              <td className="opponentcell 10-5"></td>
              <td className="opponentcell 10-6"></td>
              <td className="opponentcell 10-7"></td>
              <td className="opponentcell 10-8"></td>
              <td className="opponentcell 10-9"></td>
              <td className="opponentcell 10-10"></td>
              <td className="opponentcell 10-11"></td>
              <td className="opponentcell 10-12"></td>
              <td className="opponentcell 10-13"></td>
              <td className="opponentcell 10-14"></td>
              <td className="opponentcell 10-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 11-1"></td>
              <td className="opponentcell 11-2"></td>
              <td className="opponentcell 11-3"></td>
              <td className="opponentcell 11-4"></td>
              <td className="opponentcell 11-5"></td>
              <td className="opponentcell 11-6"></td>
              <td className="opponentcell 11-7"></td>
              <td className="opponentcell 11-8"></td>
              <td className="opponentcell 11-9"></td>
              <td className="opponentcell 11-10"></td>
              <td className="opponentcell 11-11"></td>
              <td className="opponentcell 11-12"></td>
              <td className="opponentcell 11-13"></td>
              <td className="opponentcell 11-14"></td>
              <td className="opponentcell 11-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 12-1"></td>
              <td className="opponentcell 12-2"></td>
              <td className="opponentcell 12-3"></td>
              <td className="opponentcell 12-4"></td>
              <td className="opponentcell 12-5"></td>
              <td className="opponentcell 12-6"></td>
              <td className="opponentcell 12-7"></td>
              <td className="opponentcell 12-8"></td>
              <td className="opponentcell 12-9"></td>
              <td className="opponentcell 12-10"></td>
              <td className="opponentcell 12-11"></td>
              <td className="opponentcell 12-12"></td>
              <td className="opponentcell 12-13"></td>
              <td className="opponentcell 12-14"></td>
              <td className="opponentcell 12-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 13-1"></td>
              <td className="opponentcell 13-2"></td>
              <td className="opponentcell 13-3"></td>
              <td className="opponentcell 13-4"></td>
              <td className="opponentcell 13-5"></td>
              <td className="opponentcell 13-6"></td>
              <td className="opponentcell 13-7"></td>
              <td className="opponentcell 13-8"></td>
              <td className="opponentcell 13-9"></td>
              <td className="opponentcell 13-10"></td>
              <td className="opponentcell 13-11"></td>
              <td className="opponentcell 13-12"></td>
              <td className="opponentcell 13-13"></td>
              <td className="opponentcell 13-14"></td>
              <td className="opponentcell 13-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 14-1"></td>
              <td className="opponentcell 14-2"></td>
              <td className="opponentcell 14-3"></td>
              <td className="opponentcell 14-4"></td>
              <td className="opponentcell 14-5"></td>
              <td className="opponentcell 14-6"></td>
              <td className="opponentcell 14-7"></td>
              <td className="opponentcell 14-8"></td>
              <td className="opponentcell 14-9"></td>
              <td className="opponentcell 14-10"></td>
              <td className="opponentcell 14-11"></td>
              <td className="opponentcell 14-12"></td>
              <td className="opponentcell 14-13"></td>
              <td className="opponentcell 14-14"></td>
              <td className="opponentcell 14-15"></td>
            </tr>
            <tr>
              <td className="opponentcell 15-1"></td>
              <td className="opponentcell 15-2"></td>
              <td className="opponentcell 15-3"></td>
              <td className="opponentcell 15-4"></td>
              <td className="opponentcell 15-5"></td>
              <td className="opponentcell 15-6"></td>
              <td className="opponentcell 15-7"></td>
              <td className="opponentcell 15-8"></td>
              <td className="opponentcell 15-9"></td>
              <td className="opponentcell 15-10"></td>
              <td className="opponentcell 15-11"></td>
              <td className="opponentcell 15-12"></td>
              <td className="opponentcell 15-13"></td>
              <td className="opponentcell 15-14"></td>
              <td className="opponentcell 15-15"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default connect()(OpponentBoard);
